import { Modal, Button, Text } from "@nextui-org/react";

export const ModalContent = (props: any) => {
  // eslint-disable-next-line react/prop-types
  const { setVisible, bindings, title, textdata, item } = props;
  return (
    <Modal
      scroll
      width="450px"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...bindings}
      style={{ margin: "20px" }}
    >
      <Modal.Header>
        <Text id="modal-title" size={18} weight={"bold"} color="#5b463f">
          {title}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text id="modal-description" color="#5b463f">
          {textdata}
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button
          auto
          onPress={() => {
            localStorage.setItem(item, "agree");
            setVisible(false);
          }}
        >
          Agree and Continue
        </Button>
        <Button auto flat color="error" onPress={() => setVisible(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
