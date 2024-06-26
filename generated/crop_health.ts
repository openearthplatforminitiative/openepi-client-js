/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/ping": {
    /** @description Get TorchServe status. */
    get: operations["ping"];
  };
  "/predictions/binary": {
    /** @description Health predictions by the Binary model. */
    post: operations["predictions_with_Binary"];
  };
  "/predictions/single-HLT": {
    /** @description Health predictions by the SingleHLT model. */
    post: operations["predictions_with_SingleHLT"];
  };
  "/predictions/multi-HLT": {
    /** @description Health predictions by the MultiHLT model. */
    post: operations["predictions_with_MultiHLT"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * @example {
     *   "HLT": 0.85,
     *   "NOT_HLT": 0.15
     * }
     */
    BinaryHealthPredictionResponse: {
      /** @description Healthy */
      HLT?: number;
      /** @description Not Healthy */
      NOT_HLT?: number;
    };
    /**
     * @example {
     *   "HLT": 0.9110000729560852,
     *   "FAW": 0.05462193489074707,
     *   "CSSVD": 0.025387784466147423,
     *   "FW": 0.004624366760253906,
     *   "MSV": 0.001886515412479639
     * }
     */
    SingleHLTHealthPredictionResponse: {
      /** @description Healthy */
      HLT?: number;
      /** @description Cassava Brown Streak Disease */
      CBSD?: number;
      /** @description Cassava Mosaic Disease */
      CMD?: number;
      /** @description Maize Lethal Necrosis */
      MLN?: number;
      /** @description Maize Streak Virus */
      MSV?: number;
      /** @description Fall Armyworm */
      FAW?: number;
      /** @description Maize Leaf Blight */
      MLB?: number;
      /** @description Bean Rust */
      BR?: number;
      /** @description Angular Leaf Spot */
      ALS?: number;
      /** @description Black Sigatoka */
      BS?: number;
      /** @description Fusarium Wilt Race 1 */
      FW?: number;
      /** @description Anthracnose */
      ANT?: number;
      /** @description Cocoa Swollen Shoot Virus Disease */
      CSSVD?: number;
    };
    /**
     * @example {
     *   "HLT_cocoa": 0.27080613374710083,
     *   "HLT_bananas": 0.1852046251296997,
     *   "FAW_maize": 0.15339095890522003,
     *   "HLT_maize": 0.12040198594331741,
     *   "FW_bananas": 0.11432896554470062
     * }
     */
    MultiHLTHealthPredictionResponse: {
      /** @description Healthy Cassava */
      HLT_cassava?: number;
      /** @description Cassava Brown Streak Disease */
      CBSD_cassava?: number;
      /** @description Cassava Mosaic Disease */
      CMD_cassava?: number;
      /** @description Maize Lethal Necrosis */
      MLN_maize?: number;
      /** @description Healthy Maize */
      HLT_maize?: number;
      /** @description Maize Streak Virus */
      MSV_maize?: number;
      /** @description Fall Armyworm */
      FAW_maize?: number;
      /** @description Maize Leaf Blight */
      MLB_maize?: number;
      /** @description Healthy Beans */
      HLT_beans?: number;
      /** @description Bean Rust */
      BR_beans?: number;
      /** @description Angular Leaf Spot */
      ALS_beans?: number;
      /** @description Healthy Bananas */
      HLT_bananas?: number;
      /** @description Black Sigatoka */
      BS_bananas?: number;
      /** @description Fusarium Wilt Race 1 */
      FW_bananas?: number;
      /** @description Healthy Cocoa */
      HLT_cocoa?: number;
      /** @description Anthracnose */
      ANT_cocoa?: number;
      /** @description Cocoa Swollen Shoot Virus Disease */
      CSSVD_cocoa?: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** @description Get TorchServe status. */
  ping: {
    responses: {
      /** @description TorchServe status */
      200: {
        content: {
          "application/json": {
            /** @description Overall status of the TorchServe. */
            status: string;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
    };
  };
  /** @description Health predictions by the Binary model. */
  predictions_with_Binary: {
    /** @description Picture of a plant. */
    requestBody: {
      content: {
        "*/*": Buffer;
      };
    };
    responses: {
      /** @description Predicted class confidences, all summing to 1.0. */
      200: {
        content: {
          "application/json": components["schemas"]["BinaryHealthPredictionResponse"];
        };
      };
      /** @description Model not found or Model Version not found */
      404: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
      /** @description No worker is available to serve request */
      503: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
    };
  };
  /** @description Health predictions by the SingleHLT model. */
  predictions_with_SingleHLT: {
    /** @description Picture of a plant. */
    requestBody: {
      content: {
        "*/*": string;
      };
    };
    responses: {
      /** @description Predicted class confidences, all summing to 1.0. */
      200: {
        content: {
          "application/json": components["schemas"]["SingleHLTHealthPredictionResponse"];
        };
      };
      /** @description Model not found or Model Version not found */
      404: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
      /** @description No worker is available to serve request */
      503: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
    };
  };
  /** @description Health predictions by the MultiHLT model. */
  predictions_with_MultiHLT: {
    /** @description Picture of a plant. */
    requestBody: {
      content: {
        "*/*": string;
      };
    };
    responses: {
      /** @description Predicted class confidences, all summing to 1.0. */
      200: {
        content: {
          "application/json": components["schemas"]["MultiHLTHealthPredictionResponse"];
        };
      };
      /** @description Model not found or Model Version not found */
      404: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
      /** @description No worker is available to serve request */
      503: {
        content: {
          "application/json": {
            /** @description Error code. */
            code: number;
            /** @description Error type. */
            type: string;
            /** @description Error message. */
            message: string;
          };
        };
      };
    };
  };
}