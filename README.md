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

### 3.1 Production Bootstrap and Safe Seed

For deployed environments, use the built-in safe seed flow and bootstrap admin support.

- Set `BOOTSTRAP_ADMIN_SECRET` in your production environment.
- Render / other hosts should use `web: npm run safe-start` so the app bootstraps before starting.
- The safe seed script only creates missing admin/partner/demo listings and never overwrites existing data.

To manually bootstrap admin after deployment:

```bash
curl -X POST https://<your-backend-url>/api/auth/bootstrap-admin \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "<your-bootstrap-secret>",
    "email": "admin@travelhub.com",
    "password": "admin123",
    "name": "Admin User"
  }'
```

If an admin already exists, the endpoint returns a success response without creating a duplicate.

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
| POST | `/api/auth/bootstrap-admin` | One-time bootstrap admin creation |
| POST | `/api/auth/otp/send` | Send OTP |
| POST | `/api/auth/otp/verify` | Verify OTP |
| GET | `/api/hotels` | List hotels |
| POST | `/api/hotels` | Create hotel (travel_agency or admin) |
| GET | `/api/flights` | List flights |
| POST | `/api/flights` | Create flight (airline_partner or admin) |
| GET | `/api/buses` | List buses |
| POST | `/api/buses` | Create bus (bus_operator or admin) |
| GET | `/api/cars` | List cars |
| POST | `/api/cars` | Create car (car_rental_partner or admin) |
| GET | `/api/tours` | List tours |
| POST | `/api/tours` | Create tour (travel_agency or admin) |
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

### Creating Listings with curl

1. Login and obtain a token:

```bash
curl -X POST https://<your-backend-url>/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@travelhub.com","password":"admin123"}'
```

2. Use the returned `token` as `Authorization: Bearer <token>`.

3. Create a hotel:

```bash
curl -X POST https://<your-backend-url>/api/hotels \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "City View Hotel",
    "description": "Comfortable city hotel with rooftop lounge.",
    "location": {
      "address": "123 Main St",
      "city": "New York",
      "country": "USA",
      "coordinates": {"lat":40.7128,"lng":-74.006}
    },
    "images": ["https://example.com/image1.jpg"],
    "amenities": ["WiFi","Pool","Gym"],
    "starRating": 4,
    "pricePerNight": 150,
    "totalRooms": 60,
    "availableRooms": 60
  }'
```

4. Create a flight:

```bash
curl -X POST https://<your-backend-url>/api/flights \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "flightNumber": "TR-100",
    "airline": "TravelHub Airlines",
    "origin": {"city":"New York","airport":"JFK","code":"JFK"},
    "destination": {"city":"London","airport":"LHR","code":"LHR"},
    "departureTime": "2026-08-01T09:00:00.000Z",
    "arrivalTime": "2026-08-01T19:30:00.000Z",
    "duration": 570,
    "price": {"economy": 499, "business": 1499, "firstClass": 2999},
    "totalSeats": 220,
    "availableSeats": 220
  }'
```

5. Create a bus:

```bash
curl -X POST https://<your-backend-url>/api/buses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "busNumber": "BUS-101",
    "operator": "TravelHub Bus Lines",
    "route": {"origin":"New York","destination":"Boston"},
    "departureTime": "2026-08-05T08:00:00.000Z",
    "arrivalTime": "2026-08-05T12:00:00.000Z",
    "busType": "Luxury",
    "totalSeats": 40,
    "availableSeats": 40,
    "price": 50,
    "amenities": ["WiFi","AC","USB Charging"]
  }'
```

6. Create a car:

```bash
curl -X POST https://<your-backend-url>/api/cars \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "make": "Toyota",
    "model": "Camry",
    "year": 2025,
    "category": "Economy",
    "transmission": "Automatic",
    "fuelType": "Hybrid",
    "seats": 5,
    "pricePerDay": 55,
    "images": ["https://example.com/car1.jpg"],
    "features": ["GPS","Bluetooth","Backup Camera"],
    "location": {"city":"New York","address":"JFK Airport"}
  }'
```

7. Create a tour:

```bash
curl -X POST https://<your-backend-url>/api/tours \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "title": "Coastal Escape",
    "description": "5-day beach and island tour with guided excursions.",
    "destination": "Hawaii",
    "duration": 5,
    "price": 1499,
    "maxGroupSize": 20,
    "images": ["https://example.com/tour1.jpg"],
    "itinerary": [{"day":1,"title":"Arrival","description":"Welcome reception"}],
    "inclusions": ["Hotels","Breakfast","Transport"],
    "exclusions": ["Flights","Visa"]
  }'
```

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
| `GOOGLE_CLIENT_ID` | Google OAuth client ID for server-side token verification |

### Client (`client/.env`)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |
| `VITE_SOCKET_URL` | Socket.IO server URL |
| `VITE_RAZORPAY_KEY_ID` | Razorpay public key |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe public key |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps key |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth client ID used by Google Identity Services |

> Note: The app uses Google Identity Services on the client and sends the `idToken` to `/api/auth/google` for verification. The critical OAuth configuration is the app's authorized JavaScript origin.
>
> For local development, set the authorized origin to `http://localhost:5173`.

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
