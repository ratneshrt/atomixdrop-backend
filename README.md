# AtomixDrop Backend

AtomixDrop is a **peer-to-peer file-sharing** web application built with **Next.js, TypeScript, Tailwind CSS, and WebRTC**. This repository contains the **backend server**, which handles **WebSocket-based signaling** for establishing peer connections.

## Features
- Real-time WebRTC signaling using WebSockets
- Room-based connection management
- Efficient cleanup on user disconnection

## Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - Web server
- **Socket.io** - WebSocket signaling

---

## Installation

### Prerequisites
Ensure you have **Node.js (>=16.0.0)** installed.

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ratneshrt/atomixdrop-backend
   cd atomixdrop-backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the server:**
   ```bash
   npm start
   ```

The server will start on **port 8080**.

---

## Deployment
To deploy the server, use **Docker**, **PM2**, or deploy on cloud platforms like **Heroku**, **Vercel**, or **AWS**.

---

## Contributing
1. Fork the repository
2. Create a new branch (`feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

---

## License
This project is licensed under the **MIT License**.

---

## Contact
For any issues or suggestions, feel free to **open an issue** or reach out at **ratneshrt19@example.com**.

