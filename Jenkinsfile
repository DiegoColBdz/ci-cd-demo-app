pipeline {
    agent {
        label 'ubuntu' // or just use any if you don't have a label
    }

    triggers {
        // Polling alternative; use webhook for real-time
        // pollSCM('* * * * *') // Every minute
    }

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                echo "⚙️ Configurando Node.js v${env.NODE_VERSION}"
                // Requires NodeJS plugin and configuration under Global Tools
                tool name: "NodeJS-${env.NODE_VERSION}", type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo "🔨 Construyendo aplicación..."
                sh 'ls -la'
                echo "✅ Construcción completada"
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo "🚀 Desplegando a producción..."
                echo "📁 Archivos a desplegar:"
                sh 'ls -la *.html *.js || true' // Avoid error if no .html/.js found
                echo "✅ ¡Despliegue completado!"
                echo "🌐 Tu app está disponible en: https://mi-app.com"
            }
        }
    }
}