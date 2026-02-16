<% 
    String arr[] = {"Trupti", "Hello", "World"};
    String uid = request.getParameter("uname");
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

    out.println(msg);
%>
