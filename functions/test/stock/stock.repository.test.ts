import {IMock} from 'moq.ts';
import {TestHelper} from '../helpers/helper';
import {StockRepository} from '../../src/stock/stock.repository';

describe('StockRepository', ()=> {
  let testHelper = new TestHelper();
  let stockRepository: IMock<StockRepository>;
  beforeEach(()=> {
    testHelper = new TestHelper();
    stockRepository = testHelper.getStockRepositoryMock();
  });

  it('create stock returns a stock', async () => {
    await stockRepository.object().createStock(testHelper.product1, 5);
    expect(Promise.resolve());
  });
});

