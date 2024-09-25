import { Request, Response } from 'express';
import moment from 'moment';
import { parse } from 'url';

// mock tableListDataSource
// attack ListItem generator function
const genAttackList = (current: number, pageSize: number) => {
  const tableListDataSource: API.AttackListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: index,
      name: `TradeCode ${index}`,
      beginTime: moment().format('YYYY-MM-DD'),
      endTime: moment().format('YYYY-MM-DD'),
      status: Math.floor(Math.random() * 10) % 2,
      frame: 'TensorFlow',
      network: 'ResNet18',
      dataset: 'CIFAR10',
      attack: 'BadNet',
      trigger: '/imgs/BackdoorAttack_trigger_FF.png'
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

// model ListItem generator function
const genModalList = (current: number, pageSize: number) => {
  const tableListDataSource: API.ModalListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: index,
      name: `TradeCode ${index}`,
      beginTime: moment().format('YYYY-MM-DD'),
      endTime: moment().format('YYYY-MM-DD'),
      status: Math.floor(Math.random() * 10) % 2,
      frame: 'TensorFlow',
      testModel: 'ResNet18',
      dataset: 'CIFAR10',
      detect: 'Tabor'
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
}

const genSampleList = (current: number, pageSize: number) => {
  const tableListDataSource: API.SampleListItem[] = [];

  for(let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: index,
      name: `TradeCode ${index}`,
      beginTime: moment().format('YYYY-MM-DD'),
      endTime: moment().format('YYYY-MM-DD'),
      status: Math.floor(Math.random() * 10) % 2,
      frame: 'TensorFlow',
      sampleNum: '150',
      model: 'ResNet18',
      dataset: 'CIFAR10',
      detect: 'Tabor'
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
}

// mock tableListDataSource
let attackListDataSource = genAttackList(1, 60);
let modalListDataSource = genModalList(1, 60);
let sampleListDataSource = genSampleList(1, 60);

// attack
function getRule(req: Request, res: Response, u: string) {
  console.log('getRule');
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.AttackListItem & {
      sorter: any;
      filter: any;
    };

  let dataSource = [...attackListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      (Object.keys(sorter) as Array<keyof API.AttackListItem>).forEach((key) => {
        let nextSort = next?.[key] as number;
        let preSort = prev?.[key] as number;
        if (sorter[key] === 'descend') {
          if (preSort - nextSort > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (preSort - nextSort > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }

  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return (Object.keys(filter) as Array<keyof API.AttackListItem>).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: attackListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

function getModalRule(req: Request, res: Response, u: string) {
  console.log('getModalRule');
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.ModalListItem & {
      sorter: any;
      filter: any;
    };

  let dataSource = [...modalListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      (Object.keys(sorter) as Array<keyof API.ModalListItem>).forEach((key) => {
        let nextSort = next?.[key] as number;
        let preSort = prev?.[key] as number;
        if (sorter[key] === 'descend') {
          if (preSort - nextSort > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (preSort - nextSort > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }

  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return (Object.keys(filter) as Array<keyof API.ModalListItem>).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: modalListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

function getSampleRule(req: Request, res: Response, u: string) {
  console.log('getSampleRule');
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.SampleListItem & {
      sorter: any;
      filter: any;
    };

  let dataSource = [...sampleListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      (Object.keys(sorter) as Array<keyof API.SampleListItem>).forEach((key) => {
        let nextSort = next?.[key] as number;
        let preSort = prev?.[key] as number;
        if (sorter[key] === 'descend') {
          if (preSort - nextSort > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (preSort - nextSort > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }

  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return (Object.keys(filter) as Array<keyof API.SampleListItem>).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: sampleListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

function postRule(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      attackListDataSource = attackListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule: API.AttackListItem = {
          key: attackListDataSource.length,
          name,
          beginTime: moment().format('YYYY-MM-DD'),
          endTime: moment().format('YYYY-MM-DD'),
          status: Math.floor(Math.random() * 10) % 2,
          frame: 'TensorFlow',
          network: 'ResNet18',
          dataset: 'CIFAR10',
          attack: 'WaNet'
          
        };
        attackListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        attackListDataSource = attackListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: attackListDataSource,
    pagination: {
      total: attackListDataSource.length,
    },
  };

  res.json(result);
}

function postModalRule(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      modalListDataSource = modalListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule: API.ModalListItem = {
          key: modalListDataSource.length,
          name,
          beginTime: moment().format('YYYY-MM-DD'),
          endTime: moment().format('YYYY-MM-DD'),
          status: Math.floor(Math.random() * 10) % 2,
          frame: 'TensorFlow',
          testModel: 'ResNet18',
          dataset: 'CIFAR10',
          detect: 'Tabor'

        };
        modalListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        modalListDataSource = modalListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: modalListDataSource,
    pagination: {
      total: modalListDataSource.length,
    },
  };

  res.json(result);
}

function postSampleRule(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      sampleListDataSource = sampleListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule: API.SampleListItem = {
          key: sampleListDataSource.length,
          name,
          beginTime: moment().format('YYYY-MM-DD'),
          endTime: moment().format('YYYY-MM-DD'),
          status: Math.floor(Math.random() * 10) % 2,
          frame: 'TensorFlow',
          detect: 'Tabor',
          dataset: 'CIFAR10',
          sampleNum: '150'

        };
        sampleListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        sampleListDataSource = sampleListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: sampleListDataSource,
    pagination: {
      total: sampleListDataSource.length,
    },
  };

  res.json(result);
}

export default {
  'GET /api/backdoor/attack/find': getRule,
  'POST /api/rule': postRule,
  'GET /api/backdoor/model/find': getModalRule,
  'POST /api/modalRule': postModalRule,
  'GET /api/backdoor/sample/find': getSampleRule,
  'POST /api/sampleRule': postSampleRule,
};
