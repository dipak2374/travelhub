# TravelHub API Endpoints

This document outlines all the API endpoints defined in the application (accessible via the `client/src/services/index.js` file). All endpoints are prefixed with the base API URL (e.g., `http://localhost:5000/api`).

## Authentication & Users (`/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login with email and password |
| `POST` | `/auth/otp/send` | Send a 6-digit OTP to the user's email |
| `POST` | `/auth/otp/verify` | Verify the OTP and login |
| `GET`  | `/auth/me` | Get the currently authenticated user |
| `PUT`  | `/auth/profile` | Update the current user's profile |
| `GET`  | `/auth/users` | (Admin) Get a list of all users |
| `PUT`  | `/auth/users/:id/status` | (Admin) Update a user's active/verified status |
| `PUT`  | `/auth/users/:id/approve` | (Admin) Approve a partner/agency account |

## Hotels (`/hotels`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/hotels` | Get all hotels (with optional filters) |
| `GET`  | `/hotels/:id` | Get a specific hotel by ID |
| `POST` | `/hotels` | Create a new hotel listing |
| `PUT`  | `/hotels/:id` | Update an existing hotel listing |
| `DELETE`| `/hotels/:id` | Delete a hotel listing |
| `GET`  | `/hotels/my` | Get hotels listed by the current partner/agency |
| `PUT`  | `/hotels/:id/approve` | (Admin) Approve a hotel listing |

## Flights (`/flights`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/flights` | Get all flights |
| `GET`  | `/flights/:id` | Get a specific flight by ID |
| `POST` | `/flights` | Create a new flight |
| `PUT`  | `/flights/:id` | Update an existing flight |
| `DELETE`| `/flights/:id` | Delete a flight |
| `GET`  | `/flights/my` | Get flights listed by the current airline partner |
| `PUT`  | `/flights/:id/approve` | (Admin) Approve a flight |

## Buses (`/buses`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/buses` | Get all buses |
| `GET`  | `/buses/:id` | Get a specific bus by ID |
| `POST` | `/buses` | Create a new bus listing |
| `PUT`  | `/buses/:id` | Update a bus listing |
| `DELETE`| `/buses/:id` | Delete a bus listing |
| `GET`  | `/buses/my` | Get buses listed by the current bus operator |
| `PUT`  | `/buses/:id/approve` | (Admin) Approve a bus listing |

## Cars (`/cars`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/cars` | Get all car rentals |
| `GET`  | `/cars/:id` | Get a specific car rental by ID |
| `POST` | `/cars` | Create a new car listing |
| `PUT`  | `/cars/:id` | Update a car listing |
| `DELETE`| `/cars/:id` | Delete a car listing |
| `GET`  | `/cars/my` | Get cars listed by the current car rental partner |
| `PUT`  | `/cars/:id/approve` | (Admin) Approve a car listing |

## Tours (`/tours`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/tours` | Get all tour packages |
| `GET`  | `/tours/:id` | Get a specific tour by ID |
| `POST` | `/tours` | Create a new tour package |
| `PUT`  | `/tours/:id` | Update a tour package |
| `DELETE`| `/tours/:id` | Delete a tour package |
| `GET`  | `/tours/my` | Get tours listed by the current travel agency |
| `PUT`  | `/tours/:id/approve` | (Admin) Approve a tour package |

## Bookings (`/bookings`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/bookings` | Create a new booking |
| `GET`  | `/bookings` | (Admin) Get all bookings across the platform |
| `GET`  | `/bookings/my` | Get bookings made by the current user |
| `GET`  | `/bookings/partner` | Get bookings associated with a partner's listings |
| `GET`  | `/bookings/:id` | Get details of a specific booking |
| `PUT`  | `/bookings/:id/cancel` | Cancel a booking |
| `PUT`  | `/bookings/:id/status` | Update a booking's status |
| `POST` | `/bookings/payment/create-order` | Create a payment order (e.g., Razorpay/Stripe) |
| `POST` | `/bookings/payment/verify` | Verify a completed payment |
| `GET`  | `/bookings/stats` | Get booking statistics for dashboards |

## Reviews (`/reviews`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/reviews/:itemModel/:itemId` | Get reviews for a specific item (Hotel, Flight, etc.) |
| `POST` | `/reviews` | Create a new review |
| `DELETE`| `/reviews/:id` | Delete a review |

## Coupons (`/coupons`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/coupons` | Get all available coupons |
| `POST` | `/coupons/validate` | Validate a coupon code for checkout |
| `POST` | `/coupons` | (Admin) Create a new coupon |
| `PUT`  | `/coupons/:id` | (Admin) Update a coupon |
| `DELETE`| `/coupons/:id` | (Admin) Delete a coupon |

## Notifications (`/notifications`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/notifications` | Get all notifications for the current user |
| `PUT`  | `/notifications/:id/read` | Mark a specific notification as read |
| `PUT`  | `/notifications/read-all` | Mark all notifications as read |

## Wishlist (`/wishlist`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/wishlist` | Get the user's wishlist |
| `POST` | `/wishlist/toggle` | Toggle (add/remove) an item in the wishlist |
