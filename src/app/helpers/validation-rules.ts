export class ValidationRules {
    Expression = {
      NUMBERS_ONLY: '[0-9\u0660-\u0669]*',
      EMAIL: '^[a-zA-Z0-9\u0660-\u0669._]+[a-zA-Z0-9\u0660-\u0669._%+-]+@[a-zA-Z0-9\u0660-\u0669.-]+\.[a-zA-Z]{2,4}$',
      PASSWORD: '^((?=.*[0-9\u0660-\u0669])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\!\\@\\#\\.\\$\\^\\&\\*\\-\\_])(?!.*[\\s\\{\\}\\(\\)]).{6,12})*$',
      PHONE: '[0-9\u0660-\u0669]*',
      USER_NAME: '^([a-zA-Z0-9\u0660-\u0669._]+[a-zA-Z0-9\u0660-\u0669._%+-]+@[a-zA-Z0-9\u0660-\u0669.-]+\.[a-zA-Z]{2,4}$)|([0-9\u0660-\u0669]*)',
     
    };
  }
  