export const ERROR_CODES = {
  ERROR_DUPLICATE_NUMBER: "ERROR_DUPLICATE_NUMBER",
  ERROR_INVALID_LENGTH: "ERROR_INVALID_LENGTH",
  ERROR_INVALID_NUMBER: "ERROR_INVALID_NUMBER",
  ERROR_AMOUNT_TOO_SMALL: "ERROR_AMOUNT_TOO_SMALL",
  ERROR_EMPTY_INPUT_LEN: "ERROR_EMPTY_INPUT_LEN",
  ERROR_INPUT_QUERY_TYPE: "ERROR_INPUT_QUERY_TYPE",
  ERROR_NOT_A_NUMBER: "ERROR_NOT_A_NUMBER",
  ERROR_UNKOWN: "ERROR_UNKOWN",
};

export const ERROR_MESSAGES = {
  [ERROR_CODES.ERROR_DUPLICATE_NUMBER]: "로또 번호는 중복되지 않습니다.",
  [ERROR_CODES.ERROR_INVALID_LENGTH]: "로또 번호는 6자리입니다.",
  [ERROR_CODES.ERROR_INVALID_NUMBER]: "로또 번호는 1~45 자연수입니다.",
  [ERROR_CODES.ERROR_AMOUNT_TOO_SMALL]: "구매금액은 로또 금액보다 커야합니다.",
  [ERROR_CODES.ERROR_EMPTY_INPUT_LEN]: "arguments must be 1",
  [ERROR_CODES.ERROR_INPUT_QUERY_TYPE]: "query must be string",
  [ERROR_CODES.ERROR_NOT_A_NUMBER]: "숫자를 입력해주세요",
  [ERROR_CODES.ERROR_UNKOWN]: "알 수 없는 오류가 발생했습니다.",
};
