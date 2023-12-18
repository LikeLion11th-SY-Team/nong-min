const NextBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-size: 3rem;
  z-index: 2;
`;

const NextStepBtn = styled.button`
  width: 10rem;
  height: 3.3125rem;

  border-radius: 9.5rem;
  background: #002d61;
  box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.3) inset,
    3px 2px 10px 0px rgba(255, 255, 255, 0.45) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  text-align: center;
  font-size: 1.5625rem;
  font-weight: 600;

  position: absolute;
  bottom: 0;
  right: 0;

  display: ${({ page }) => (page ? "block" : "none")};
  z-index: 3;
`;
