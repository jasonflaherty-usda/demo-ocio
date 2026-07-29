pipeline {
  agent any

  environment {
    NODE_VERSION = '20'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        nodejs('node-22') {
          sh 'npm install'
        }
      }
    }

    stage('OWASP Dependency Check') {
      steps {
        nodejs('node-22') {
          sh 'npm audit --omit=dev'
        }
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          nodejs('node-22') {
            sh 'npx sonar-scanner'
          }
        }
      }
    }

    stage('Build') {
      steps {
        nodejs('node-22') {
          sh 'npm run build'
        }
      }
    }
  }
}
