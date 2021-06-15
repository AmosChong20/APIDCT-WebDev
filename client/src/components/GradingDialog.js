import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function GradingDialog(props) {
  const [open, setOpen] = React.useState(props.open);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"确认提交？"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            {"请检查清楚才点击“提交”，一旦提交就无法再做修改，也无法重新提交。"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={props.submit} color="primary" autoFocus>
            提交
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
