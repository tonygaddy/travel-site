import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    events() {
        // clicking open modal
        this.openModalButton.click(this.openModal.bind(this));

        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        // pressing esc key
        $(document).keyup(this.keyPressHandler.bind(this));
        // this.openModalButton.click(this.closeModal.bind(this));
    }

    keyPressHandler(event) {
        if(event.keyCode === 27) {
            this.closeModal();
        }
    }

    openModal() {
        console.log('open');
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        console.log('close');
        this.modal.removeClass('modal--is-visible');
        return false;
    }
}


export default Modal;
