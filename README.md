# TravelHub – All-in-One Travel & Booking Platform

**Tagline:** *Plan, Book, and Travel – All in One Place.*

A production-quality MERN stack travel booking platform supporting hotels, flights, buses, car rentals, and tour packages — built as a portfolio-ready foundation with role-based access, payments structure, real-time notifications, and admin analytics.

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat&logo=tailwindcss)

---

## Features

### Core Modules
- **Home Page** – Hero section, multi-service search widget, featured listings
- **Authentication** – JWT login/register, OTP login structure, role-based access (RBAC)
- **Booking Flows** – Search, detail, checkout for hotels, flights, buses, cars, tours
- **Payments** – Razorpay & Stripe integration structure (dev mode fallback)
- **Dashboards** – Customer, Partner/Agency, and Admin with Chart.js analytics
- **Reviews & Ratings** – Create and display reviews with auto-updated averages
- **Wishlist** – Save favorite listings
- **Coupons** – Admin-managed discount codes with validation
- **Notifications** – Socket.IO real-time + REST API
- **Email** – Nodemailer structure (logs in dev without SMTP)
- **Image Upload** – Cloudinary middleware with local fallback
- **Google Maps** – Placeholder component with embed support via env key
- **Dark Mode** – System-aware toggle with persistence
- **Responsive Design** – Mobile-first Tailwind UI

### User Roles (RBAC)
| Role | Capabilities |
|------|-------------|
| **Customer** | Search, book, pay, review, wishlist, profile |
| **Travel Agency** | Manage hotels & tours, view bookings & earnings |
| **Car Rental Partner** | Manage vehicles, pricing, availability |
| **Bus Operator** | Manage buses, routes, schedules |
| **Airline Partner** | Manage flights & schedules |
| **Admin** | Users, partners, approvals, coupons, analytics |

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 18, Vite, Tailwind CSS, React Router, Redux Toolkit, Axios, Chart.js, Socket.IO Client |
| Backend | Node.js, Express, JWT, Bcrypt, Multer, Nodemailer |
| Database | MongoDB, Mongoose |
| External | Cloudinary, Razorpay, Stripe, Google Maps API, Socket.IO |

---

## Project Structure

```
travelhub/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── layouts/        # Main & Dashboard layouts
│   │   ├── pages/          # Route pages
│   │   ├── dashboard/      # Dashboard views
│   │   ├── hooks/          # Custom hooks (theme, socket)
│   │   ├── services/       # API service layer
│   │   ├── redux/          # Redux store & slices
│   │   ├── routes/         # Route guards
│   │   └── utils/          # Constants & helpers
│   └── package.json
├── server/                 # Express backend
│   ├── config/             # DB, Cloudinary, Email config
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Auth, upload, error handling
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── services/           # Email, payment, notifications
│   ├── utils/              # Seed script, token helpers
│   └── server.js
└── README.md
```

---

## Getting Started

### Prerequisites
- **Node.js** 18+
- **MongoDB** running locally or a MongoDB Atlas connection string

### 1. Install Dependencies

```bash
cd travelhub
npm run install:all
```

### 2. Configure Environment

```bash
# Server
cp server/.env.example server/.env

# Client
cp client/.env.example client/.env
```

Edit `server/.env` — at minimum set:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/travelhub
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
```

### 3. Seed Demo Data

```bash
npm run seed
```

### 4. Run Development Servers

```bash
# Both client (5173) and server (5000) concurrently
npm run dev
```

Or run separately:
```bash
npm run dev:server   # http://localhost:5000
npm run dev:client   # http://localhost:5173
```

### 5. Build for Production

```bash
npm run build        # Builds client
npm run start        # Starts server + client preview
```

---

## Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@travelhub.com | admin123 |
| Customer | customer@travelhub.com | customer123 |
| Travel Agency | agency@travelhub.com | agency123 |
| Airline | airline@travelhub.com | airline123 |
| Bus Operator | bus@travelhub.com | bus123 |
| Car Rental | car@travelhub.com | car123 |

**Coupons:** `WELCOME20` (20% off), `FLIGHT50` ($50 off flights)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/otp/send` | Send OTP |
| POST | `/api/auth/otp/verify` | Verify OTP |
| GET | `/api/hotels` | List hotels |
| GET | `/api/flights` | List flights |
| GET | `/api/buses` | List buses |
| GET | `/api/cars` | List cars |
| GET | `/api/tours` | List tours |
| POST | `/api/bookings` | Create booking |
| POST | `/api/bookings/payment/create-order` | Create payment |
| POST | `/api/bookings/payment/verify` | Verify payment |
| GET | `/api/bookings/stats` | Admin analytics |
| GET | `/api/reviews/:model/:id` | Get reviews |
| POST | `/api/reviews` | Create review |
| GET | `/api/coupons` | List coupons |
| POST | `/api/coupons/validate` | Validate coupon |
| GET | `/api/notifications` | User notifications |
| POST | `/api/wishlist/toggle` | Toggle wishlist |

---

## Environment Variables

### Server (`server/.env`)
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string. Use Render Environment Variables for deployment, or local `.env` only for development. |
| `JWT_SECRET` | JWT signing secret. Must be set in Render for production. |
| `JWT_EXPIRE` | Token expiry (default: 7d) |
| `CLIENT_URL` | Frontend URL for CORS |
| `SMTP_*` | Nodemailer email config |
| `CLOUDINARY_*` | Cloudinary image upload |
| `RAZORPAY_*` | Razorpay payment keys |
| `STRIPE_*` | Stripe payment keys |
| `GOOGLE_MAPS_API_KEY` | Google Maps embed |

### Client (`client/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |
| `VITE_SOCKET_URL` | Socket.IO server URL |
| `VITE_RAZORPAY_KEY_ID` | Razorpay public key |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe public key |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps key |

---

## Future Enhancements

- [ ] Full Razorpay/Stripe checkout UI with webhooks
- [ ] Partner listing creation forms in dashboard
- [ ] Seat selection UI for buses and flights
- [ ] Advanced search filters (dates, price range, amenities)
- [ ] Email verification on registration
- [ ] Password reset flow
- [ ] Multi-language support (i18n)
- [ ] PWA / mobile app
- [ ] CI/CD pipeline and Docker setup
- [ ] Unit & integration tests
- [ ] Rate limiting and API caching
- [ ] Admin listing approval UI
- [ ] Refund and cancellation policies

---

## License

MIT — free to use for portfolio and learning purposes.

---

Built with ❤️ for travelers everywhere.
