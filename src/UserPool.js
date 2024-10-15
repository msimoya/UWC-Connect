import { CognitoUserPool } from 'amazon-cognito-identity-js'

// create pool data
const poolData = {
  UserPoolId: 'us-east-1_rtCkVztIe',
  ClientId: '7bhvcs71av7ihr9t536qoda783',
}

export default new CognitoUserPool(poolData)
