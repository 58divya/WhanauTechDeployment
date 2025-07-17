# Use official Python slim image
FROM python:3.11-slim

# Install system dependencies for building Rust and Python packages
RUN apt-get update && apt-get install -y curl build-essential git

# Install Rust toolchain
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Set working directory in container
WORKDIR /app

# Copy requirements first to leverage Docker cache
COPY requirements.txt .

# Upgrade pip and install python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the backend code
COPY . .

# Expose Flask default port
EXPOSE 5000

# Set environment variables for Flask
ENV FLASK_APP=wsgi.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the Flask app
CMD ["flask", "run"]
