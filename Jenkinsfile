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
        withEnv(["PATH+NODE=${tool 'NodeJS'}"]) {
          sh 'npm install'
        }
      }
    }

    stage('OWASP Dependency Check') {
      steps {
        sh 'npm audit --omit=dev'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          sh 'npx sonar-scanner'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
