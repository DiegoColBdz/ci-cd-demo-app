pipeline {
    agent any
    
    triggers {
        githubPush()
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Adjust based on your project type
                sh 'npm install'  // For Node.js
                // sh 'pip install -r requirements.txt'  // For Python
                // sh 'mvn clean compile'  // For Maven
            }
        }
        
        stage('Test') {
            steps {
                // Adjust based on your project type
                sh 'npm test'  // For Node.js
                // sh 'python -m pytest'  // For Python
                // sh 'mvn test'  // For Maven
            }
        }
    }
    
    post {
        always {
            // Clean workspace
            cleanWs()
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}