import React from "react"
import styles from "./ModalWindow.module.css"

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  itemName: any
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Are you sure you want to delete {itemName}?</h2>
        <button onClick={onConfirm} className={styles.confirmBtn}>
          Confirm
        </button>
        <button onClick={onClose} className={styles.cancelBtn}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default DeleteModal
