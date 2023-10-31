import {
  Box,
  Text,
  Divider,
  Heading,
  Card,
  CardBody,
  List,
  ListItem,
} from '@razorpay/blade/components';
import React from 'react';

function DividerIssue() {
  return (
    <Box flex={1}>
      <Card>
        <CardBody>
          <Box display="flex" flexDirection="column">
            <Heading margin="spacing.4">Payment Links</Heading>
            <Divider
              orientation="horizontal"
              dividerStyle="dashed"
              thickness="thick"
            />
            <Box margin="spacing.4">
              <Text>Share payment link via:</Text>
              <List>
                <ListItem>Email</ListItem>
                <ListItem>SMS</ListItem>
                <ListItem>Messenger</ListItem>
              </List>
            </Box>
          </Box>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <Box display="flex" flexDirection="row">
            <Heading margin="spacing.4">Payment Links</Heading>
            <Divider
              orientation="vertical"
              dividerStyle="solid"
              thickness="thick"
            />
            <Box margin="spacing.4">
              <Text>Share payment link via:</Text>
              <List>
                <ListItem>Email</ListItem>
                <ListItem>SMS</ListItem>
                <ListItem>Messenger</ListItem>
              </List>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default DividerIssue;
