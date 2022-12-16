pipeline {
    agent {
        docker {
            image 'node:18.12.1' 
            args '-p 4173:4173' 
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
                sh 'chmod +x ./scripts/*'
                sh './scripts/deploy.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './scripts/kill.sh' 
            }
        }
    }

    
}