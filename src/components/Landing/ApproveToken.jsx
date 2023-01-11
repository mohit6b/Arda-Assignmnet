import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const ApprooveToken = () => {
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="tokenAmount"
              label="Token Amount"
              type="number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
        </Box>
    </>
  );
};
ApprooveToken.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ApprooveToken);
