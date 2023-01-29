import { connect } from '@planetscale/database'

export default function planetScaleClient(env) {
  const config = {
    host: env.PS_HOST,
    username: env.PS_USERNAME,
    password: env.PS_PASSWORD
  }
  
  return connect(config);
}