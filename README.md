# 🚀 Next.js Template — Complete Auth & Database Setup

A production-ready **Next.js 15** template with **NextAuth.js**, **Prisma**, **PostgreSQL**, **Shadcn UI**, and **role-based authentication**.  
Perfect for building SaaS applications, dashboards, and admin panels with enterprise-grade security and beautiful UI components.

---

## ✨ Features

### 🔐 **Authentication & Authorization**
- **NextAuth.js** with JWT sessions
- **Credentials Provider** with bcrypt password hashing
- **Role-based access control** (ADMIN, USER)
- **Protected routes middleware** with automatic redirects
- **Session management** with secure token handling

### 🎨 **UI & Styling**
- **Shadcn UI** components with Radix UI primitives
- **Dark/Light theme** support with next-themes
- **Responsive design** with Tailwind CSS
- **Beautiful forms** with Formik and Yup validation
- **Toast notifications** with Sonner

### 🗄️ **Database & ORM**
- **Prisma ORM** for type-safe database operations
- **PostgreSQL** database with connection pooling
- **Database migrations** and seeding
- **User management** with roles and permissions

### 📊 **Data Fetching & State Management**
- **TanStack React Query** for server state management
- **Automatic caching** and background refetching
- **Optimistic updates** for better UX
- **Error handling** and retry logic
- **DevTools** for debugging queries

### 🛡️ **Security & Middleware**
- **Route protection** based on user roles
- **CSRF protection** with NextAuth
- **Password hashing** with bcrypt
- **Environment variable** validation
- **Unauthorized access** handling

### 🚀 **Developer Experience**
- **TypeScript** for full type safety
- **ESLint** configuration for code quality
- **Hot reload** with Turbopack
- **Component library** with reusable UI components
- **Form validation** with real-time feedback
- **TanStack React Query** for server state management and caching

---

## 🧩 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 15.5.4 |
| **TypeScript** | Type safety and developer experience | 5.x |
| **NextAuth.js** | Authentication and session management | 4.24.11 |
| **Prisma** | Database ORM and migrations | 6.16.3 |
| **PostgreSQL** | Primary database | Latest |
| **TanStack React Query** | Server state management and caching | Latest |
| **Shadcn UI** | UI component library | Latest |
| **Tailwind CSS** | Utility-first CSS framework | 4.x |
| **Formik** | Form state management | 2.4.6 |
| **Yup** | Schema validation | 1.7.1 |
| **bcryptjs** | Password hashing | 3.0.2 |
| **Sonner** | Toast notifications | 2.0.7 |

---

## ⚙️ Getting Started

### 1️⃣ Clone the Template

```bash
git clone https://github.com/YOUR_USERNAME/nextjs-template-auth-prisma.git
cd nextjs-template-auth-prisma
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

### 4️⃣ Database Setup

1. **Create PostgreSQL database** (local or cloud)
2. **Update database URL** in `.env.local`
3. **Run Prisma migrations**:

```bash
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

### 5️⃣ Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here"

# Email Configuration (Optional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@yourdomain.com"

# Environment
NODE_ENV="development"
```

### 🔑 **Required Variables**

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `NEXTAUTH_URL` | Your application URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret for JWT signing | `your-super-secret-key-here` |

### 📧 **Optional Variables**

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_SERVER_HOST` | SMTP server host | `smtp.gmail.com` |
| `EMAIL_SERVER_PORT` | SMTP server port | `587` |
| `EMAIL_SERVER_USER` | SMTP username | `your-email@gmail.com` |
| `EMAIL_SERVER_PASSWORD` | SMTP password | `your-app-password` |
| `EMAIL_FROM` | From email address | `noreply@yourdomain.com` |

---

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   │   └── sign-in/       # Sign-in page
│   ├── dashboard/         # Protected dashboard
│   ├── admin/             # Admin-only routes
│   ├── user/              # User-only routes
│   ├── unauthorized/      # Access denied page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── forms/            # Form components
│   └── app-sidebar.tsx   # Sidebar navigation
├── lib/                  # Utility functions
│   ├── authHelper.ts     # Authentication helpers
│   ├── prisma.ts         # Prisma client
│   ├── query-client.ts   # TanStack React Query configuration
│   └── utils.ts          # General utilities
├── middleware.ts         # Route protection middleware
├── pages/api/auth/       # NextAuth API routes
├── prisma/              # Database schema and migrations
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Database seeding
├── providers/           # React context providers
└── types/              # TypeScript type definitions
```

---

## 🔐 Authentication Flow

### **User Registration & Login**
1. User submits credentials via login form
2. NextAuth validates credentials against database
3. JWT token created with user role and permissions
4. Session established and user redirected to dashboard

### **Route Protection**
1. Middleware checks if route requires authentication
2. Validates JWT token from session
3. Checks user role against route requirements
4. Allows access or redirects to appropriate page

### **Role-Based Access**
- **ADMIN**: Full access to admin panel and user management
- **USER**: Access to user dashboard and personal settings
- **Unauthorized**: Redirected to access denied page

---

## 🎨 UI Components

The template includes a comprehensive set of UI components:

### **Form Components**
- Login form with Formik and Yup validation
- Real-time validation feedback
- Loading states and error handling

### **Navigation**
- Responsive sidebar with role-based menu items
- User dropdown with profile and logout
- Breadcrumb navigation

### **Layout Components**
- Dashboard layout with sidebar
- Admin panel layout
- User dashboard layout
- Error and loading pages

---

## 📊 Data Fetching with TanStack React Query

The template includes a pre-configured TanStack React Query setup for efficient data fetching:

### **QueryClient Configuration**
- **Optimized for SSR**: Prevents unnecessary refetches on client mount
- **Smart retry logic**: No retry on 4xx errors, up to 3 retries for others
- **Stale time**: 1 minute to reduce unnecessary network requests
- **DevTools**: Built-in debugging tools for development

### **Usage Examples**

```tsx
// Fetching data with useQuery
const { data: users, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000, // 5 minutes
})

// Mutations with useMutation
const createUserMutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
    toast.success('User created successfully!')
  },
  onError: (error) => {
    toast.error('Failed to create user')
  },
})

// Optimistic updates
const updateUserMutation = useMutation({
  mutationFn: updateUser,
  onMutate: async (newUser) => {
    await queryClient.cancelQueries({ queryKey: ['users'] })
    const previousUsers = queryClient.getQueryData(['users'])
    queryClient.setQueryData(['users'], (old) => [...old, newUser])
    return { previousUsers }
  },
  onError: (err, newUser, context) => {
    queryClient.setQueryData(['users'], context.previousUsers)
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
  },
})
```

### **Key Features**
- **Automatic caching**: Reduces API calls and improves performance
- **Background refetching**: Keeps data fresh automatically
- **Optimistic updates**: Instant UI feedback for better UX
- **Error boundaries**: Graceful error handling
- **Loading states**: Built-in loading and error states

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### **Other Platforms**
- **Railway**: Great for PostgreSQL hosting
- **Supabase**: PostgreSQL with built-in auth
- **PlanetScale**: MySQL-compatible database
- **Docker**: Containerized deployment

---

## 📚 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma migrate dev    # Run database migrations
npx prisma generate       # Generate Prisma client
npx prisma db seed        # Seed database with sample data
npx prisma studio         # Open Prisma Studio
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Prisma](https://www.prisma.io/) for database management
- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- [Vercel](https://vercel.com/) for hosting and deployment

---

**Happy coding! 🚀**
#   n e x t j s - b o i l e r p l a t e  
 