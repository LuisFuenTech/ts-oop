/* It's like a contract where every class
   must fulfill this structure
*/
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

export class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('Connected');
  }

  disconnect(): void {
    console.log('Disconnected');
  }
  isConnected(): boolean {
    return true;
  }
}
