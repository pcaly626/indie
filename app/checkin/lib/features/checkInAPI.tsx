// A mock function to mimic making an async request for data
export const fetchAddCheckin = async (email: string, address: string, Interval: number) => {
    const response = await fetch("http://localhost:5185/api/checkin", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"},
      body: JSON.stringify({ email, address, Interval }),
    });
    const result: any = await response.json();
    
    return result;
  };

export const fetchGetCheckin = async () => {
    const response = await fetch("http://localhost:5185/api/checkin", {
        method: "GET",
        headers: { 
        "Content-Type": "application/json"},
    });
    const result: Array<any> = await response.json();

    return result;
};

export const fetchGetCheckinById = async (id : number) => {
    const response = await fetch(`http://localhost:5185/api/checkin?id=${id}`, {
        method: "GET",
        headers: { 
        "Content-Type": "application/json"},
    });
    const result: { data: any } = await response.json();
    
    return result;
    };