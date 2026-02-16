<% 
    response.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    // response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
    //     response.setStatus(HttpServletResponse.SC_OK);
    //     return;
    // }
    String arr[] = {"Trupti", "Hello", "World"};
    String uid = request.getParameter("username");

    // out.println(uid + " verified");
    String msg = "";
    for(String ele : arr) {
        if(ele.equals(uid)) {
            msg = "Not Available";
            break;
        } else {
            msg = "Available";
        }
    }
%>

<h1>Username: <%= uid %> is <%= msg %></h1>