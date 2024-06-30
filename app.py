from flask import Flask, request, jsonify
import mysql.connector
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

# Database configuration
db_config = {
    'user': 'root',  # Your MySQL username
    'password': 'your_password',  # Your MySQL password
    'host': 'localhost',  # Your MySQL host
    'database': 'service_bookings'  # Your database name
}

def send_email(to, subject, body):
    sender = "your_email@example.com"
    password = "your_email_password"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = to

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender, password)
        server.sendmail(sender, [to], msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False

@app.route('/submit_booking', methods=['POST'])
def submit_booking():
    data = request.get_json()

    name = data['name']
    email = data['email']
    phone = data['phone']
    service = data['service']
    message = data['message']

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        query = ("INSERT INTO bookings (name, email, phone, service, message) "
                 "VALUES (%s, %s, %s, %s, %s)")
        cursor.execute(query, (name, email, phone, service, message))
        conn.commit()

        subject = "Service Booking Confirmation"
        body = f"Dear {name},\n\nThank you for booking our {service} service. We will get back to you shortly.\n\nBest Regards,\nYour Company"
        send_email(email, subject, body)

        return jsonify({"status": "success", "message": "Booking submitted successfully!"})
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({"status": "error", "message": "Failed to submit booking."})
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
