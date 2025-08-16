# Month Challenges Project

A full-stack web application for managing monthly challenges with a React frontend and Spring Boot backend.

## Overview

This project provides a simple yet effective platform to create, track, and manage monthly challenges. Users can add new challenges, view existing ones, and mark them as complete.

## Tech Stack

### Backend (MonthChallenges/)
- **Framework**: Spring Boot 3.5.3
- **Language**: Java 21
- **Database**: MySQL with JPA/Hibernate
- **Dependencies**: Spring Web, Spring Data JPA, Lombok

### Frontend (Frontend/)
- **Framework**: React 19.1.0
- **Build Tool**: Vite
- **Language**: JavaScript/JSX

## Features

- Create new monthly challenges
- View all challenges in a list
- Mark challenges as complete
- Responsive web interface
- RESTful API backend

## Quick Start

### Backend
```bash
cd MonthChallenges/
mvn spring-boot:run
```

### Frontend
```bash
cd Frontend/frontend/
npm install
npm run dev
```

The application will be available at `http://localhost:5173` (frontend) and `http://localhost:8080` (backend API).

