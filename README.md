# 🛍️ ApnaStore - Quick Commerce Platform

> **Fast, Reliable, Local Shopping at Your Doorstep**

A modern quick commerce application built with **Spring Boot** that brings the convenience of ultra-fast delivery to your shopping experience. ApnaStore is engineered to handle high-volume transactions with a clean, scalable architecture.

---

## 🌟 Key Features

✨ **Lightning-Fast Delivery**
- Real-time order processing and tracking
- Optimized delivery management system
- Live order status updates

📦 **Smart Inventory Management**
- Dynamic product catalog
- Stock level tracking
- Intelligent supply chain operations

👥 **User-Centric Design**
- Seamless registration and authentication
- Personalized shopping experience
- Order history and preferences

💳 **Secure Payment Processing**
- Multiple payment gateway integration
- PCI-compliant transactions
- Transaction logging and audit trails

📊 **Admin Dashboard**
- Real-time analytics and insights
- Order and delivery management
- User and inventory control

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Spring Boot 3.2.3 |
| **Language** | Java 17 |
| **Build Tool** | Maven 3.9.6 |
| **Database** | H2 (Embedded SQL) |
| **ORM** | Spring Data JPA |
| **API** | RESTful Web Services |

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Java 17** or higher installed
- **Maven 3.9.6** or higher
- **Git** for version control
- **Windows/Linux/Mac** OS

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/abhi-7320/ApnaStore.git
cd ApnaStore
```

### 2. Build the Project
```bash
# Using Maven
mvn clean install

# Or use the provided batch file (Windows)
./build_final.bat
```

### 3. Run the Application
```bash
# Using Maven
mvn spring-boot:run

# Or use the provided batch file (Windows)
./run.bat
```

The application will start on `http://localhost:8080`

---

## 📁 Project Structure

```
ApnaStore/
├── src/
│   └── main/
│       ├── java/com/apnastore/
│       │   ├── ApnaStoreApplication.java    # Main Spring Boot App
│       │   ├── controller/                  # REST Controllers
│       │   ├── model/                       # Entity Models (JPA)
│       │   ├── repository/                  # Data Access Layer
│       │   └── config/                      # Configuration Classes
│       └── resources/
│           ├── application.properties       # App Configuration
│           └── static/                      # Static Resources
├── pom.xml                                  # Maven Configuration
├── target/                                  # Compiled Output
└── README.md                                # Documentation
```

---

## 🏗️ Architecture

ApnaStore follows the **Spring Boot MVC Architecture**:

```
Request → Controller → Service/Business Logic → Repository → Database
          ↓                                       ↓
        Response ← Processing Layer ← Data Access Layer
```

### Components:
- **Controllers**: Handle HTTP requests and responses
- **Models**: Define database entities and relationships
- **Repositories**: Implement data persistence using Spring Data JPA
- **Services**: Contain business logic and operations
- **Configuration**: Spring Boot configuration and beans

---

## 💻 API Endpoints

The application provides RESTful endpoints for managing:
- Users and authentication
- Products and inventory
- Orders and transactions
- Deliveries and tracking
- Payments and billing

---

## 🔧 Available Commands

| Command | Description |
|---------|-----------|
| `mvn clean install` | Clean build and install dependencies |
| `mvn spring-boot:run` | Run the application |
| `mvn test` | Execute unit tests |
| `./build_final.bat` | Complete build (Windows) |
| `./run.bat` | Run application (Windows) |
| `./run_jar.bat` | Run JAR file (Windows) |
| `./deploy_git.bat` | Deploy to Git (Windows) |

---

## 🗄️ Database

ApnaStore uses **H2 Database** for development and testing:
- **Type**: Embedded relational database
- **Persistence**: In-memory with file-based backup
- **Configuration**: Defined in `application.properties`
- **Access**: H2 Console typically at `http://localhost:8080/h2-console`

---

## 🚢 Deployment

### Build JAR Package
```bash
mvn clean package
```

### Run JAR
```bash
java -jar target/apnastore-0.0.1-SNAPSHOT.jar
```

### Windows Deployment Scripts
- `build_final.bat` - Full build process
- `run_jar.bat` - Execute JAR file
- `deploy_git.bat` - Git deployment
- `start_server.bat` - Start application server

---

## 📊 Project Statistics

- **Language**: Java
- **Build System**: Maven
- **Spring Boot Version**: 3.2.3
- **Java Version**: 17
- **Project Type**: BCA Educational Project
- **Status**: Active Development

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow Spring Boot best practices
- Write clean, documented code
- Add unit tests for new features
- Update documentation as needed

---

## 🐛 Troubleshooting

### Build Issues
- Ensure Maven is in your PATH: `mvn --version`
- Clear Maven cache: `mvn clean`
- Delete `.m2` folder and rebuild

### Runtime Issues
- Check Java version: `java -version`
- Verify port 8080 is available
- Check `application.properties` configuration

### Database Issues
- H2 database file may need reset
- Clear `target/` folder and rebuild
- Check database permissions

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Abhishek** - [GitHub Profile](https://github.com/abhi-7320)

---

## 📞 Support & Contact

- **GitHub Issues**: [Create an issue](https://github.com/abhi-7320/ApnaStore/issues)
- **Email**: Contact via GitHub profile
- **Documentation**: Check the `/docs` folder for detailed guides

---

## 🎯 Roadmap

- ✅ Core quick commerce functionality
- 🔄 Advanced analytics and reporting
- 🔄 Mobile app integration
- 🔄 Payment gateway expansion
- 🔄 Multi-regional support
- 🔄 Real-time notifications

---

## ⭐ Show Your Support

If you find this project helpful, please consider giving it a star! ⭐

---

**Last Updated**: March 2026 | **Status**: 🟢 Active Development 
