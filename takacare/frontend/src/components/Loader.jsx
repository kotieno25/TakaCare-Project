import { Circles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-32">
      <Circles height="40" width="40" color="#166534" ariaLabel="loading" />
    </div>
  );
}
