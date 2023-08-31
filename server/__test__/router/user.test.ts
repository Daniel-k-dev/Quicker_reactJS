import { Sequelize } from "sequelize";
import { initModels } from "../../Maria/Models/init-models";
import keys from "../../config/keys";
import { findUserNameByWalletAddress } from "../../service/User";

const sequelize = new Sequelize("Quicker", "root", "11111111", {
  dialect: "mariadb",
  host: "localhost",
  port: 3306,
  logging: false,
});

describe("/user", () => {

  beforeAll(() => {
    initModels(sequelize);
  });
  
  afterAll(() => {
    sequelize.close();
  });

  describe("/name 라우터", () => {
    describe("지갑주소를 이용하여 사용자의 이름을 가지고 오는 서비스", () => {
      test("존재하는 지갑 주소", async () => {
        const query = { walletAddress: keys.test.USER_WALLET };
        const user = await findUserNameByWalletAddress(query);
        expect(user?.name).toBe("김퀵커");
      });

      test("존재하지 않는 지갑 주소", async () => {
        const query = { walletAddress: "아무개" };
        const user = await findUserNameByWalletAddress(query);
        expect(user).toBe(null);
      });
    });
  });
});
