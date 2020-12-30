import axios from 'axios';
import { getBackendHostUrl } from '../../utils';

const hostUrl = getBackendHostUrl();

if (!hostUrl) {
  throw new Error(
    'Cannot initialize axios instance, failed to retrieve hostURL is missing | this error could occur due to missing enviornment variable',
  );
}

const instance = axios.create({ baseURL: hostUrl });
instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;
