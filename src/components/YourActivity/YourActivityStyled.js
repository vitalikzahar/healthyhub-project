import styled from 'styled-components';

export const ActivityContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 24px 10px;
  margin: auto;

  @media (min-width: 768px) {
    align-items: center;

    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: 1440px;
    padding: 40px 150px 62px 150px;
    margin: auto;
  }
`;

export const ActivityImage = styled.img`
  width: 300px;
  height: 304px;
  @media (min-width: 768px) {
    width: 380px;
    height: 384px;
  }

  @media (min-width: 1024px) {
    width: 592px;
    height: 598px;
  }
`;

export const ActivityWrapper = styled.div`
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 80px;
    margin-left: 104px;
  }
`;

export const ActivityTitle = styled.h2`
  /* width: 280px; */
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

export const ActivityDescription = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const ActivityForm = styled.form`
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ActivityLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const ActivityLabel = styled.label`
  width: 280px;
  display: flex;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media (min-width: 768px) {
    width: 438px;
  }

  @media (min-width: 1024px) {
    width: 308px;
    color: var(--Color-Primary-White, #fff);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const ActivityInput = styled.input`
  margin-right: 8px;
`;

export const ActivityButtonSignUp = styled.button`
  width: 280px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 360px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    width: 192px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ActivityButtonBack = styled.button`
  width: 280px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  @media (min-width: 768px) {
    margin-left: auto;
    display: flex;
    justify-content: center;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    width: 192px;
    margin-left: 0;
    margin-right: 0;
  }
`;
