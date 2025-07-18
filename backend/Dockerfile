FROM python:3.12-slim

# Use correct ENV syntax (avoids legacy warnings)
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies for building llama-cpp-python
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    libopenblas-dev \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip and wheel
RUN pip install --upgrade pip setuptools wheel

# Copy and install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy backend app source code
COPY backend/app ./app

# Copy React build folder into /app/build
COPY backend/build ./build

# Copy  database folder into /app/database
COPY backend/database ./database


# Set the port and command to run
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
