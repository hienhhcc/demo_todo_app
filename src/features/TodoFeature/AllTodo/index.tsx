import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useHooks from './hooks';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useInjectReducer, useInjectSaga } from 'redux-injectors';
// import { sliceKey, reducer } from 'features/TodoFeature/slice';
// import saga from 'features/TodoFeature/saga';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AllTodoFeature = () => {
  // useInjectSaga({ key: sliceKey, saga });
  // useInjectReducer({ key: sliceKey, reducer });
  const navigate = useNavigate();

  const [pickDeleteItemId, setPickDeleteItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { selectors, handlers } = useHooks();
  const { items, count, page } = selectors;
  const { handleDeleteItem, handlePageChange } = handlers;

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">
            Are you sure u wanna delete this item?
          </Typography>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Button
              onClick={() => {
                handleDeleteItem(pickDeleteItemId);
                handleClose();
              }}
            >
              Yes
            </Button>
            <Button onClick={() => handleClose()}>No</Button>
          </Stack>
        </Box>
      </Modal>
      <List
        sx={{
          margin: 'auto',
          width: '500px',
          mt: 3,
        }}
      >
        {items.slice(7 * (page - 1), 7 * (page - 1) + 7).map((todo: any) => (
          <ListItem
            secondaryAction={
              <Stack
                direction="row"
                gap="0.5rem"
                justifyContent="center"
                alignItems="center"
              >
                <IconButton
                  onClick={() => navigate(`/todos/${todo.id}`)}
                  edge="end"
                  aria-label="edit"
                >
                  <EditOutlinedIcon sx={{ color: 'blue' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleOpen();
                    setPickDeleteItemId(todo.id);
                  }}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
              </Stack>
            }
            key={todo.id}
            sx={{
              mt: 1,
              background: '#fff',
              boxShadow: '4px 4px 4px rgba(0,0,0,0.1)',
              borderRadius: '8px',
            }}
          >
            <ListItemText primary={todo.name} secondary={null} />
          </ListItem>
        ))}
      </List>
      <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
        <Pagination count={count} onChange={handlePageChange} page={page} />
      </Stack>
    </>
  );
};

export default AllTodoFeature;
