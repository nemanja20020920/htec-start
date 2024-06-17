import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = () => {
  const notify = () => toast.success('Wow so easy!');
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer position="bottom-center" theme="dark" />
    </div>
  );
};

export default CustomToast;
