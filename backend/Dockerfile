# Use official lightweight Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside container
WORKDIR /app

# Install system dependencies (required for some Python packages)
RUN apt-get update && apt-get install -y \
    build-essential \
 && rm -rf /var/lib/apt/lists/*

# Copy requirements file and install Python dependencies
COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy backend source code into container
COPY . .

# Create database folder if not exists (avoid runtime error)
RUN mkdir -p /app/database

# Expose the port Flask/Gunicorn will run on
EXPOSE 5000

# Start the app using Gunicorn and the wsgi entry point
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
