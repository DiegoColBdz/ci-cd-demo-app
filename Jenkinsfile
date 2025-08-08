pipeline {
    agent {
        docker {
            image 'node:18' // Imagen oficial de Node.js
            args '-p 3000:3000' // Si quieres exponer puertos
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "✅ Build completado"'
            }
        }
    }
}
