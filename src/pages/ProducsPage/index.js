import ProducsPage from './ProducsPage';
import reducer from './reducer';
import { register } from "../../store/asyncReducers";
register('products', reducer);

export default ProducsPage;