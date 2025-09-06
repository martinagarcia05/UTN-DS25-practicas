import { Request, Response } from "express";
export declare const getBook: (req: Request, res: Response) => void;
export declare const getBookID: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const postBook: (req: Request, res: Response) => void;
export declare const putBook: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const deleteBook: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=BookController.d.ts.map