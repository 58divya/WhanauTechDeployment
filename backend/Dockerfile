# Use official Python image
FROM python:3.11-slim

# Set env variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PATH="/root/.cargo/bin:$PATH"

# Set working directory
WORKDIR /app

# Install system dependencies & Rust (for llama-cpp-python)
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
 && rm -rf /var/lib/apt/lists/* \
 && curl https://sh.rustup.rs -sSf | bash -s -- -y

# Copy dependency list and install Python packages
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy entire backend directory into container
COPY . .

# Expose port for Flask
EXPOSE 5000

# Run app using Gunicorn and wsgi.py
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
