export const useFormValidation = () => {
    const validateForm = (form) => {
        if (!form.checkValidity()) {
            return false; 
        } else {
            return true; 
        }
        // form.classList.add('was-validated');
    };

    const applyValidation = () => {
        const forms = document.querySelectorAll('.needs-validation');
        return Array.from(forms).every(form => validateForm(form));
    };

    return { applyValidation };
};
