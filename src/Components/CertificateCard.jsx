import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  margin-bottom: 20px;
  border: 1px solid #015761;
`;

const CardTitle = styled(Card.Title)`
  color: #015761;
`;

const CardDate = styled(Card.Subtitle)`
  color: #555;
`;

const CertificateCard = ({ title, issuer, date, description }) => {
  return (
    <CardContainer>
      <Card.Body>
        <CardTitle>{title}</CardTitle>
        <Card.Subtitle>{issuer}</Card.Subtitle>
        <CardDate>{date}</CardDate>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </CardContainer>
  );
};

export default CertificateCard;
