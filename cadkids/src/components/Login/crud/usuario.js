import React from "react";

export function Usuario( cpf , senha )
{
    if (senha == null || cpf == null)           return false
    else if ( senha == '12345' && cpf == 12345) return true    
}