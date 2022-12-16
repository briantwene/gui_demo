pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:4173' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run jenkins-test' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'npm run build'
                sh 'npm preview' 
            }
        }
    }

    
}