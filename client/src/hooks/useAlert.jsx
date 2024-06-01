import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const useAlert = () => {
  const SwalWithReactContent = withReactContent(Swal);

  const showAlert = ({ title, text, icon, confirmButtonText, cancelButtonText, nextProcessCallback }) => {
    return SwalWithReactContent.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      customClass: {
        confirmButton: 'btn btn-success custom-confirm-button',
        cancelButton: 'btn btn-danger custom-cancel-button',
      },
      buttonsStyling: false,
      reverseButtons: true,
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        const cancelButton = Swal.getCancelButton();
        if (confirmButton && cancelButton) {
          confirmButton.style.marginRight = '10px'; // Add margin between the buttons
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (nextProcessCallback && typeof nextProcessCallback === 'function') {
          nextProcessCallback();
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        SwalWithReactContent.fire({
          title: 'Cancelled',
          text: 'You have cancelled the operation',
          icon: 'error',
        });
      }
    });
  };

  return showAlert;
};

export default useAlert;
