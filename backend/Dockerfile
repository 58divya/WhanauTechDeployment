# Use official lightweight Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside container
WORKDIR /app

# Install system dependencies (if any needed)
RUN apt-get update && apt-get install -y \
    build-essential \
 && rm -rf /var/lib/apt/lists/*

# Copy requirements file from backend folder (relative to build context) and install Python dependencies
COPY backend/requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy only backend folder contents into /app
COPY backend/ .

# Expose port Flask will run on
EXPOSE 5000

# Run Gunicorn with your wsgi module
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
