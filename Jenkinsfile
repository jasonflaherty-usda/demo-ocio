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
        nodejs('current') {
          sh 'npm install'
        }
      }
    }

    stage('OWASP Dependency Check') {
      steps {
        nodejs('current') {
          sh 'npm audit --omit=dev'
        }
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          nodejs('current') {
            sh 'npx sonar-scanner'
          }
        }
      }
    }

    stage('Build') {
      steps {
        nodejs('current') {
          sh 'npm run build'
        }
      }
    }
  }
}
