# Use official Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
 && rm -rf /var/lib/apt/lists/*

# Copy Python dependency file and install dependencies
COPY backend/requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy backend code
COPY backend/ /app/

# Copy React build (ensure React is built before this)
COPY backend/build/ /app/build/

# Expose port used by Flask/Gunicorn
EXPOSE 5000

# Run Gunicorn using the WSGI entry point
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
